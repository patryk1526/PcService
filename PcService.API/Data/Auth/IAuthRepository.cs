using System.Threading.Tasks;
using PcService.API.Models;

namespace PcService.API.Data.Auth
{
   public interface IAuthRepository
   {
      Task<User> Register(User user, string password);
      Task<User> Login(string username, string password);
      Task<bool> UserExists(string username);
   }
}