using SmartAttendance.Models;

namespace SmartAttendance.Services;

public interface IStudentService
{
    IEnumerable<Student> GetAll();

    Student Create(Student student);

    Student? Update(int id, Student student);

    bool Delete(int id);
}