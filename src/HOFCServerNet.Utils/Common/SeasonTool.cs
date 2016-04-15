using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Utils.Common
{
    public class SeasonTool
    {
        /// <summary>
        /// Permet de récupérer l'identifiant de la saison correspondant à la date courante
        /// </summary>
        /// <returns></returns>
        public static string GetSeasonIndex()
        {
            int month = DateTime.Now.Month;
            int year = DateTime.Now.Year;

            if(month < 7)
            {
                return (year - 1) + "/" + year;
            }
            else
            {
                return year + "/" + (year + 1);
            }
        }
    }
}
