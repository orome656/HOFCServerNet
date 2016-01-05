using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerParser.Constants
{
    public class URLMiseAJour
    {
        public static Dictionary<string, string> Calendrier = new Dictionary<string, string>
        {
            {"equipe1", "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_calendrier_resultat.php?cp_no=319539&ph_no=1&gp_no=&sa_no=2015&typ_rech=equipe&cl_no=177005&eq_no=1&type_match=deux&lieu_match=deux"},
            {"equipe2", "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_calendrier_resultat.php?cp_no=317727&ph_no=1&gp_no=&sa_no=2015&typ_rech=equipe&cl_no=177005&eq_no=6&type_match=deux&lieu_match=deux"},
            {"equipe3", "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_calendrier_resultat.php?cp_no=317728&ph_no=1&gp_no=&sa_no=2015&typ_rech=equipe&cl_no=177005&eq_no=7&type_match=deux&lieu_match=deux"}
        };

        public static Dictionary<string, string> Classement = new Dictionary<string, string>
        {
            {"equipe1", "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_classement.php?sa_no=2015&cp_no=319539&ph_no=1&gp_no="},
            {"equipe2", "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_classement.php?sa_no=2015&cp_no=317727&ph_no=1&gp_no="},
            {"equipe3", "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_classement.php?sa_no=2015&cp_no=317728&ph_no=1&gp_no="}
        };

        public static string Agenda = "http://district-foot-65.fff.fr/competitions/php/club/club_agenda.php?cl_no=177005&deb_semaine=";

        public static string Actus = "http://www.hofc.fr/category/seniors/";

        public static Dictionary<string, string> Journee = new Dictionary<string, string>
        {
            {"equipe1", "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_calendrier_resultat.php?typ_rech=journee&cp_no=319539&ph_no=1&gp_no=&sa_no=2015&pj_no="},
            {"equipe2", "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_calendrier_resultat.php?typ_rech=journee&cp_no=317727&ph_no=1&gp_no=&sa_no=2015&pj_no="},
            {"equipe3", "http://district-foot-65.fff.fr/competitions/php/championnat/championnat_calendrier_resultat.php?typ_rech=journee&cp_no=317728&ph_no=1&gp_no=&sa_no=2015&pj_no="}
        };
    }
}
