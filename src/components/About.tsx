export function About() {
  return (
    <div className="px-4 md:px-6 py-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Acerca de Platos virtuales</h1>
        <p className="text-lg text-muted-foreground mb-8">
        Nos apasiona brindar la mejor experiencia gastronómica a nuestros clientes. Nuestra misión es conectar a los amantes de la comida con los mejores restaurantes de su zona.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="text-center">
          <div className="bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🍳</span>
          </div>
          <h3 className="font-semibold mb-2">Chefs expertos</h3>
          <p className="text-muted-foreground">
          Nuestra plataforma se asocia con los chefs más talentosos de la industria.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🚚</span>
          </div>
          <h3 className="font-semibold mb-2">Fast Delivery</h3>
          <p className="text-muted-foreground">
          Garantizamos que su comida llegue caliente y fresca en 60 minutos.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-rose-100 dark:bg-rose-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⭐</span>
          </div>
          <h3 className="font-semibold mb-2">La calidad es lo primero</h3>
          <p className="text-muted-foreground">
          Nunca comprometemos la calidad de la comida ni del servicio.
          </p>
        </div>
      </div>
    </div>
  );
}