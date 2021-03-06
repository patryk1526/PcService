using System.ComponentModel.DataAnnotations;

namespace PcService.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        [DataType(DataType.Text)]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [StringLength(25, MinimumLength = 4)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string FirstName { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string LastName { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }
    }
}