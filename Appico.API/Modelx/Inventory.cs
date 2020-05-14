using System;
using System.ComponentModel.DataAnnotations;

namespace Appico.Api.Modelx
{
    public class Inventory
    {
        [Key]
        public int Guid { get; set; }

        [Required]
        public int Dealer { get; set; }

        [Required]
        public int Model { get; set; }

        [Required]
        public string Vin { get; set; }
    }
}