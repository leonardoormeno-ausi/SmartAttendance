using Microsoft.AspNetCore.Mvc;
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
}