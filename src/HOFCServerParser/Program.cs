using HOFCServerNet.Models;
using HOFCServerParser.Parsers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerParser
{
    public class Program
    {
        public static void Main(string[] args)
        {   using(var bddContext = new BddContext())
            {
                //CalendrierParser.Parse("equipe1");
                ClassementParser.Parse("equipe1");
            }
        }
    }
}
