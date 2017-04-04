using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace HOFCServerNet.Data.Converters
{
    public class DateTimeConverter : JsonConverter
    {
        public override bool CanConvert(Type objectType)
        {
            return objectType == typeof(DateTime);
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var date = (DateTime)value;
            writer.WriteValue(date.ToString("yyyy-MM-dd'T'HH:mm:ss.fffzzz"));
        }
    }
}
