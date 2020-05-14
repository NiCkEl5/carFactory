using System;
using System.ComponentModel.DataAnnotations;

namespace Appico.Api.Modelx
{
    public class ContactDetail
    {
        [Key]
        public int guid { get; set; }

        [Required]
        public string name { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string dealername { get; set; }

        [Required]
        public string make { get; set; }

        [Required]
        public string model { get; set; }

        [Required]
        public string type { get; set; }

        [Required]
        public string message { get; set; }
        
        public DateTime created { get; set; }
    }
}