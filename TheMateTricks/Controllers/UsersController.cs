using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using TheMateTricks.Data;
using TheMateTricks.DTOs;
using AutoMapper;
using TheMateTricks.Models;


namespace TheMateTricks.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        public readonly IUserRepository _repo;
        public readonly IMapper _mapper;
        public UsersController(IUserRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        // GET: api/Users/5
        
        [HttpGet("{id}")]
        
        public async Task<UserDetailedDTO> GetUser([FromRoute]int id)
        {

            var users = await _repo.GetUser(id);
            if (users == null)
            {
                return null;
            }
            var userDetails = _mapper.Map<UserDetailedDTO>(users);        
            return userDetails;
        }

        [HttpGet]
        public async Task<IEnumerable<UserBriefDTO>> GetUsers()
        {
            var Users = await _repo.GetUsers();
            var userBriefDetails = _mapper.Map<IEnumerable<UserBriefDTO>>(Users);
            return userBriefDetails;
        }
        [HttpPut("/api/users/updateuser/{id}")]
        
        public async Task<IActionResult> UpdateUser(int id, [FromBody] editUserDTO updatedUser)
        {
            var user = await _repo.GetUser(id);
            user = _mapper.Map(updatedUser, user);
            await _repo.SaveAll();
            return NoContent();

        }

    }
}