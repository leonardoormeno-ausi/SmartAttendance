using Microsoft.AspNetCore.Mvc;
using SmartAttendance.Models;
using SmartAttendance.Services;
using Microsoft.AspNetCore.Authorization;

namespace SmartAttendance.Controllers;

[Authorize]
[ApiController]
[Route("api/students")]
public class StudentsController : ControllerBase
{
    private readonly IStudentService _studentService;

    public StudentsController(IStudentService studentService)
    {
        _studentService = studentService;
    }

    [Authorize(Roles = "admin,seller")]
    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_studentService.GetAll());
    }

    [Authorize(Roles = "admin,seller")]
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

    [Authorize(Roles = "admin")]
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

    [Authorize(Roles = "admin")]
    [HttpPut("{id}")]
    public IActionResult Update(int id, Student student)
    {
        var updatedStudent = _studentService.Update(id, student);

        if (updatedStudent == null)
        {
            return NotFound();
        }

        return Ok(updatedStudent);
    }

    [Authorize(Roles = "admin")]
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