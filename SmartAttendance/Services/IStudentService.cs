using SmartAttendance.Models;

namespace SmartAttendance.Services;

public interface IStudentService
{
    IEnumerable<Student> GetAll();

    Student Create(Student student);

    bool Delete(int id);
}