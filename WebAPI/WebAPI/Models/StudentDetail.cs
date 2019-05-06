using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class StudentDetail
    {
        [Key]
        public int STId { get; set; }
        [Required]
        [Column(TypeName ="nvarchar(100)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(3)")]
        public string Age { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(300)")]
        public string Address { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Course { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string City { get; set; }


    }
}
