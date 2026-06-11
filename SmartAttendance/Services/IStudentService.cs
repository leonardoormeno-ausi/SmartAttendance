using SmartAttendance.Models;

namespace SmartAttendance.Services;

public interface IStudentService
{
    IEnumerable<Student> GetAll();
}