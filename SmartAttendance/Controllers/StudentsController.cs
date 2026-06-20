using Microsoft.AspNetCore.Mvc;
using SmartAttendance.Models;
using SmartAttendance.Services;

namespace SmartAttendance.Controllers;

[ApiController]
[Route("api/students")]
public class StudentsController : ControllerBase
{
    private readonly IStudentService _studentService;

    public StudentsController(IStudentService studentService)
    {
        _studentService = studentService;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_studentService.GetAll());
    }
    [HttpGet("{id}")]
public IActionResult GetById(int id)
{
    var student = _studentService.GetById(id);

    if (student == null)
    {
        return NotFound();
    }

    return Ok(student);
}

   [HttpPost]
public IActionResult Create(Student student)
{
    if (
        string.IsNullOrWhiteSpace(student.FirstName) ||
        string.IsNullOrWhiteSpace(student.LastName) ||
        string.IsNullOrWhiteSpace(student.Email)
    )
    {
        return BadRequest("Nombre, apellido y email son obligatorios.");
    }

    var createdStudent = _studentService.Create(student);

    return CreatedAtAction(
        nameof(GetById),
        new { id = createdStudent.Id },
        createdStudent
    );
}

    [HttpPut("{id}")]
    public IActionResult Update(int id, Student student)
    {
        var updatedStudent =
            _studentService.Update(id, student);

        if (updatedStudent == null)
        {
            return NotFound();
        }

        return Ok(updatedStudent);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var deleted = _studentService.Delete(id);

        if (!deleted)
        {
            return NotFound();
        }

        return NoContent();
    }
}