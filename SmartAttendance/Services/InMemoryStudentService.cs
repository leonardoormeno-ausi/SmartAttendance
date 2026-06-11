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

public Student Create(Student student)
{
    student.Id = _students.Max(s => s.Id) + 1;

    _students.Add(student);

    return student;
}

public bool Delete(int id)
{
    var student = _students.FirstOrDefault(s => s.Id == id);

    if (student == null)
    {
        return false;
    }

    _students.Remove(student);

    return true;
}

public Student? Update(int id, Student student)
{
    var existingStudent =
        _students.FirstOrDefault(s => s.Id == id);

    if (existingStudent == null)
    {
        return null;
    }

    existingStudent.FirstName = student.FirstName;
    existingStudent.LastName = student.LastName;
    existingStudent.Course = student.Course;
    existingStudent.Email = student.Email;
    existingStudent.IsActive = student.IsActive;

    return existingStudent;
}
}