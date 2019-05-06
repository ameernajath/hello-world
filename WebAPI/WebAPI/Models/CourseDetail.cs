using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class CourseDetail
    {
        [Key]
        public int CId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Subjects { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Duration { get; set; }

    }
}