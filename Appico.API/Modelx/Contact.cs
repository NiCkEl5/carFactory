using System;
using System.ComponentModel.DataAnnotations;

namespace Appico.Api.Modelx
{
    public class Contact
    {
        [Key]
        public int Guid { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Message { get; set; }

        [Required]
        public int dealer { get; set; }

        [Required]
        public int model { get; set; }
        
        public DateTime created { get; set; }
    }
}