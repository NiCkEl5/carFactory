using System;
using System.ComponentModel.DataAnnotations;

namespace Appico.Api.Modelx
{
    public class InventoryCar
    {
        [Key]
        public int Guid { get; set; }

        [Required]
        public string Vin { get; set; }
        [Required]
        public int dealerguid { get; set; }

        [Required]
        public string DealerName { get; set; }

        [Required]
        public int carmodelguid { get; set; }

        [Required]
        public string Make { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public string Type { get; set; }

    }
}