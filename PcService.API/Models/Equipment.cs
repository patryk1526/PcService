using System;
using System.Collections.Generic;

namespace PcService.API.Models
{
   public class Equipment
   {
      public int Id { get; set; }
      public int ClientId { get; set; }
      public User Client { get; set; }
      public string Name { get; set; }
      public string ProblemDescription { get; set; }
      public DateTime ComplaintDate { get; set; }
      public DateTime ReleaseDate { get; set; }
      public ICollection<Element> Elements { get; set; }
   }
}