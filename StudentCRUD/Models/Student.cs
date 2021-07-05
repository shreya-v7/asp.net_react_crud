using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCRUD.Models
{
    public class Student
    {
        public int Rid { get; set; }
        public string Sname { get; set; }
        public string Course { get; set; }
        public string DOB { get; set; }
        public string Photo { get; set; }
    }
}
