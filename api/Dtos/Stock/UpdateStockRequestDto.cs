    using System;
    using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
    using System.Threading.Tasks;

    namespace api.Dtos.Stock
    {
        public class UpdateStockRequestDto
        {
            [Required]
            [MaxLength(10, ErrorMessage = "Symbol cannot exceed 10 characters")]
            public string Symbol { get; set; } = string.Empty;
            [MaxLength(100, ErrorMessage = "Company name cannot exceed 100 characters")]
            public string CompanyName { get; set; } = string.Empty;
            [Range(1, 1000000000)]
            public decimal Purchase { get; set; }
            [Range(0.001, 100)]
            public decimal LastDiv { get; set; }
            [MaxLength(10, ErrorMessage = "Industry cannot exceed 10 characters")]
            public string Industry { get; set; } = string.Empty;
            [Range(1, 50000000000)]
            public long MarketCap { get; set; }
        }
    }

