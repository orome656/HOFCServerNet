using HOFCServerNet.Models;
using HOFCServerParser.Parsers;

namespace HOFCServerParser
{
    public class Program
    {
        public static void Main(string[] args)
        { 
            string[] equipe = new string[] { "equipe1"/*, "equipe2", "equipe3"*/};
            foreach(string name in equipe)
            {
                var calendrierParser = new CalendrierParser(name);
                calendrierParser.Parse();
            }
            foreach (string name in equipe)
            {
                var classementParser = new ClassementParser(name);
                classementParser.Parse();
            }
            var actusParser = new ActusParser();
            actusParser.Parse();
        }
    }
}
