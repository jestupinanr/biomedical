"use client";
import { Input } from "@/components/client/form/Input";
import { ProductCompleteItem } from "@/types/product";
import { Filter, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import AnimatedSection from "@/components/client/layout/AnimatedSection";
import { Button } from "@/components/client/common/Button";
import { fadeInUp, viewportConfig } from "@/utils/animations";

interface ProductListProps {
  catalogProducts: ProductCompleteItem[];
  categories: string[];
}

const ProductsList = ({ catalogProducts, categories }: ProductListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("todos");
  };

  const hasActiveFilters =
    searchQuery !== "" || selectedCategory.toLocaleLowerCase() !== "todos";

  const capitalizeText = (text: string) =>
    text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    const categorySelect = selectedCategory.toLocaleLowerCase();
    return catalogProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        categorySelect === "todos" ||
        product.category?.toLocaleLowerCase() === categorySelect;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, catalogProducts]);

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp(1)}
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#2f3092]/40" />
              <Input
                type="text"
                placeholder={"Buscar producto"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 h-12 bg-white border-[#E5E7EB] rounded-xl text-[#2f3092] placeholder:text-[#2f3092]/40 focus:border-[#24aae1] focus:ring-2 focus:ring-[#24aae1]/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2f3092]/40 hover:text-[#2f3092] transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-[#2f3092]/60">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">{"filtrar por"}</span>
            </div>
            <div className="flex-1 overflow-x-auto scrollbar-thin scrollbar-thumb-[#24aae1]/20 scrollbar-track-transparent">
              <div className="flex gap-2 pb-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 whitespace-nowrap capitalize ${
                      selectedCategory.toLocaleLowerCase() ===
                      category.toLocaleLowerCase()
                        ? "bg-linear-to-r from-[#24aae1] to-[#1173bc] text-white shadow-md shadow-[#24aae1]/30"
                        : "bg-white text-[#2f3092] border border-[#E5E7EB] hover:border-[#24aae1] hover:text-[#1173bc]"
                    }`}
                  >
                    {capitalizeText(category)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters & Results Count */}
          <div className="flex items-center justify-between text-sm">
            {/* <div className="text-[#2f3092]/60">filtros {selectedCategory.length}</div> */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-[#1173bc] hover:underline flex items-center gap-1"
              >
                <X className="h-3.5 w-3.5" />
                {"limpiar filtros"}
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.title + index} product={product} />
          ))}
        </div>
        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <AnimatedSection
            className="text-center py-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp(3)}
          >
            <div className="w-16 h-16 bg-linear-to-br from-[#24aae1]/10 to-[#1173bc]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-[#2f3092]/40 dark:text-white/40" />
            </div>
            <h3 className="text-[#2f3092] dark:text-white mb-2">
              No se encontraron resultados
            </h3>
            <p className="text-[#2f3092]/60 dark:text-white/50 text-sm mb-4">
              Trata de cambiar los filtros de búsqueda
            </p>
            <Button
              onClick={clearFilters}
              className="bg-linear-to-r from-[#24aae1] to-[#1173bc] hover:from-[#1173bc] hover:to-[#2f3092] text-white rounded-xl px-6 py-2 h-auto text-sm"
            >
              {"limpiar filtros"}
            </Button>
          </AnimatedSection>
        )}

        {/* Total Products Info */}
        {filteredProducts.length > 0 && (
          <AnimatedSection
            className="mt-8 text-center text-sm text-[#2f3092]/50 dark:text-white/40"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp(3)}
          >
            Mostrando {filteredProducts.length} de {catalogProducts.length}
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default ProductsList;
