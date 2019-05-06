﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentDetailController : ControllerBase
    {
        private readonly StudentDetailContext _context;

        public StudentDetailController(StudentDetailContext context)
        {
            _context = context;
        }

        // GET: api/StudentDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentDetail>>> GetStudentDetails()
        {
            return await _context.StudentDetails.ToListAsync();
        }

        // GET: api/StudentDetail/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<StudentDetail>> GetStudentDetail(int id)
        //{
        //    var studentDetail = await _context.StudentDetails.FindAsync(id);

        //    if (studentDetail == null)
        //    {
        //        return NotFound();
        //    }

        //    return studentDetail;
        //}

        // PUT: api/StudentDetail/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentDetail(int id, StudentDetail studentDetail)
        {
            if (id != studentDetail.STId)
            {
                return BadRequest();
            }

            _context.Entry(studentDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        //GET: api/StudentDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentDetail>> GetStudentDetail(int id)
        {
            var studentDetail = await _context.StudentDetails.FindAsync(id);

            if (studentDetail == null)
            {
                return NotFound();
            }

            return studentDetail;
        }

        // POST: api/StudentDetail
        [HttpPost]
        public async Task<ActionResult<StudentDetail>> PostStudentDetail(StudentDetail studentDetail)
        {
            _context.StudentDetails.Add(studentDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentDetail", new { id = studentDetail.STId }, studentDetail);
        }

        // DELETE: api/StudentDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<StudentDetail>> DeleteStudentDetail(int id)
        {
            var studentDetail = await _context.StudentDetails.FindAsync(id);
            if (studentDetail == null)
            {
                return NotFound();
            }

            _context.StudentDetails.Remove(studentDetail);
            await _context.SaveChangesAsync();

            return studentDetail;
        }

        private bool StudentDetailExists(int id)
        {
            return _context.StudentDetails.Any(e => e.STId == id);
        }
    }
}
