using System;
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
    public class CourseDetailController : ControllerBase
    {
        private readonly StudentDetailContext _context;

        public CourseDetailController(StudentDetailContext context)
        {
            _context = context;
        }

        // GET: api/CourseDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDetail>>> GetCourseDetails()
        {
            return await _context.CourseDetails.ToListAsync();
        }

        // GET: api/CourseDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CourseDetail>> GetCourseDetail(int id)
        {
            var courseDetail = await _context.CourseDetails.FindAsync(id);

            if (courseDetail == null)
            {
                return NotFound();
            }

            return courseDetail;
        }

        // PUT: api/CourseDetail/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourseDetail(int id, CourseDetail courseDetail)
        {
            if (id != courseDetail.CId)
            {
                return BadRequest();
            }

            _context.Entry(courseDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseDetailExists(id))
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

        // POST: api/CourseDetail
        [HttpPost]
        public async Task<ActionResult<CourseDetail>> PostCourseDetail(CourseDetail courseDetail)
        {
            _context.CourseDetails.Add(courseDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourseDetail", new { id = courseDetail.CId }, courseDetail);
        }

        // DELETE: api/CourseDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CourseDetail>> DeleteCourseDetail(int id)
        {
            var courseDetail = await _context.CourseDetails.FindAsync(id);
            if (courseDetail == null)
            {
                return NotFound();
            }

            _context.CourseDetails.Remove(courseDetail);
            await _context.SaveChangesAsync();

            return courseDetail;
        }

        private bool CourseDetailExists(int id)
        {
            return _context.CourseDetails.Any(e => e.CId == id);
        }
    }
}
