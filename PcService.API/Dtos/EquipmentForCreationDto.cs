using System;

namespace PcService.API.Dtos
{
   public class EquipmentForCreationDto
   {
      public EquipmentForCreationDto()
      {
         RequestDate = DateTime.Now;
      }
      public int ClientId { get; set; }
      public string Name { get; set; }
      public string ProblemDescription { get; set; }
      public DateTime RequestDate { get; set; }
   }
}