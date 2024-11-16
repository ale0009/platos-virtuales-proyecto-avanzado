import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    category: "Entrantes",
    items: [
      {
        name: "Bruschetta",
        price: "$8.99",
        description: "Pan a la parrilla frotado con ajo y cubierto con tomates",
        tags: ["Vegetariano"]
      },
      {
        name: "Calamares",
        price: "$12.99",
        description: "Calamares fritos crujientes con salsa marinara",
        tags: ["Mariscos"]
      }
    ]
  },
  {
    category: "Platos Principales",
    items: [
      {
        name: "Pasta Carbonara",
        price: "$16.99",
        description: "Pasta clásica con huevos, queso, panceta y pimienta negra",
        tags: ["Popular"]
      },
      {
        name: "Salmón a la Parrilla",
        price: "$24.99",
        description: "Salmón fresco con hierbas y salsa de mantequilla de limón",
        tags: ["Saludable", "Sin gluten"]
      }
    ]
  },
  {
    category: "Postres",
    items: [
      {
        name: "Tiramisú",
        price: "$8.99",
        description: "Postre italiano clásico con café y mascarpone",
        tags: ["Popular"]
      },
      {
        name: "Pastel de Lava de Chocolate",
        price: "$9.99",
        description: "Pastel de chocolate tibio con un centro derretido",
        tags: ["Nuevo"]
      }
    ]
  }
];

export function Menu() {
  return (
    <div className="px-4 md:px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuestro Menu</h1>
        <p className="text-lg text-muted-foreground">
        Descubra nuestra selección de platos cuidadosamente seleccionados
        </p>
      </div>

      <div className="space-y-12">
        {menuItems.map((section) => (
          <div key={section.category}>
            <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-bold text-rose-500">{item.price}</span>
                    </div>
                    <div className="flex gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}