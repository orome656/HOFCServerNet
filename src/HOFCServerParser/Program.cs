using HOFCServerNet.Models;
using HOFCServerParser.Parsers;

namespace HOFCServerParser
{
    public class Program
    {
        public static void Main(string[] args)
        {   using(var bddContext = new BddContext())
            {
                var calendrierParser = new CalendrierParser("equipe1");
                calendrierParser.Parse();
                /*var classementParser = new ClassementParser("equipe1");
                classementParser.Parse();*/
            }
        }
    }
}
