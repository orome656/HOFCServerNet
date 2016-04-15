using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace HOFCServerNet.Utils.Common
{
    public class CompetitionTool
    {
        public static string GetCategorieFromCompetition(string competition)
        {
            Regex regex = new Regex(@"(U\d{2})", RegexOptions.IgnoreCase);
            Match match = regex.Match(competition);
            if(match.Success)
            {
                return match.Groups[0].Value.ToUpper();
            }
            return string.Empty;
        }
    }
}
