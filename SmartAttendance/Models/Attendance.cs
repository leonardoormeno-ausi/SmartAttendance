namespace SmartAttendance.Models;

public class Attendance
{
    public int Id { get; set; }

    public int StudentId { get; set; }

    public DateTime Date { get; set; }

    public bool Present { get; set; }

    public bool Late { get; set; }
}