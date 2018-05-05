﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using TheMateTricks.DTOs;
using CloudinaryDotNet.Actions;
using TheMateTricks.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using TheMateTricks.Models;

namespace TheMateTricks.Controllers
{
    //[Produces("application/json")]
    //[Route("api/Photo")]
    public class PhotoController : Controller
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        private readonly Cloudinary _cloudinary;

        public PhotoController(IUserRepository repo, IMapper mapper, IConfiguration config)
        {
            _repo = repo;
            _mapper = mapper;
            _config = config;
            Account acc = new Account(
                _config.GetSection("CloudinarySettings:CloudName").Value,
                _config.GetSection("CloudinarySettings:ApiKey").Value,
                _config.GetSection("CloudinarySettings:ApiSecret").Value);
            _cloudinary = new Cloudinary(acc);
        }

        [HttpPost("/api/users/{userId}/photos")]
        //[Route("/api/users/{userId}/photos")]
        public async Task<IActionResult> AddPhotoForUser(int userId, AddPhotoDTO photo)
        {
            var user = await _repo.GetUser(userId);
            if (user == null)
            {
                return BadRequest("No such user");
            }
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (currentUserId != user.ID)
                return Unauthorized();

            var file = photo.File;

            var uploadResult = new ImageUploadResult();

            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
                    };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            photo.Url = uploadResult.Uri.ToString();
            photo.PublicId = uploadResult.PublicId;

            var newPhoto = _mapper.Map<Photo>(photo);

            newPhoto.User = user;

            if (!user.Photos.Any(p => p.IsProfilePic))
                newPhoto.IsProfilePic = true;

            user.Photos.Add(newPhoto);

            if (await _repo.SaveAll())
            {
                var photoToReturn = _mapper.Map<PhotoReturnedDTO>(newPhoto);
                return CreatedAtRoute("GetPhoto", new { id = newPhoto.ID }, photoToReturn);
            }
            return BadRequest("Could not save photo");
        }
    }
}