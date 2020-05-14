using System;
using System.ComponentModel.DataAnnotations;

namespace Appico.Api.Modelx
{
  public class Carmodels
  {
    [Key]
    public int Guid { get; set; }

    [Required]
    public string Make { get; set; }

    [Required]
    public string Model { get; set; }

    [Required]
    public string Type { get; set; }

    [Required]
    public string Year { get; set; }
  }
}