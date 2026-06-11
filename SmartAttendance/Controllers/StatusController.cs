using Microsoft.AspNetCore.Mvc;

namespace SmartAttendance.Controllers;

[ApiController]
[Route("api/status")]
public class StatusController : ControllerBase
{
    [HttpGet("ping")]
    public IActionResult Ping()
    {
        return Ok(new
        {
            message = "pong"
        });
    }
}