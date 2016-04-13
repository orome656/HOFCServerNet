using HOFCServerNet.Data.Utils;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Enums
{
    public static class EnumExtensions
    {
        public static string ToDescription(this Enum enumValue) 
        {
            FieldInfo field = enumValue.GetType().GetField(enumValue.ToString());
            // Le type de retour est différent entre asp.net core et asp.net 4.5
            var attribs = field.GetCustomAttributes(typeof(DisplayText), true);
            if(attribs.Count() > 0)
            {
                return ((DisplayText)attribs.ElementAt(0)).Text;
            }
            return string.Empty;
        }

        public static T ParseEnum<T>(string value)
        {
            return (T)Enum.Parse(typeof(T), value, true);
        }
    }
}
