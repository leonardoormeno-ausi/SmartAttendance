using SmartAttendance.Models;

namespace SmartAttendance.Services;

public class InMemoryStudentService : IStudentService
{
    private readonly List<Student> _students =
    [
        new Student
        {
            Id = 1,
            FirstName = "Juan",
            LastName = "Perez",
            Course = "1A",
            Email = "juan@school.com",
            IsActive = true
        },

        new Student
        {
            Id = 2,
            FirstName = "Maria",
            LastName = "Gomez",
            Course = "2B",
            Email = "maria@school.com",
            IsActive = true
        },

        new Student
        {
            Id = 3,
            FirstName = "Lucas",
            LastName = "Fernandez",
            Course = "3C",
            Email = "lucas@school.com",
            IsActive = false
        }
    ];

    public IEnumerable<Student> GetAll()
    {
        return _students;
    }
}