using System;
using System.ComponentModel.DataAnnotations;

namespace Appico.Api.Modelx
{
    public class Dealer
    {
        [Key]
        public int Guid { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }

    }
}