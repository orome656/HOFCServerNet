using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOFCServerNet.Data.Utils
{
    public class DisplayText: Attribute
    {
        public DisplayText(string text)
        {
            this.Text = text;
        }

        public string Text { get; set; }

    }
}
