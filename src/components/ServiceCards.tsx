import { Button } from "@/components/ui/button";

const IsoTriangle = () => (
  <svg viewBox="0 0 200 200" className="h-full w-full">
    {/* Impossible triangle / Penrose triangle */}
    <polygon points="100,30 170,150 30,150" fill="none" stroke="#1e293b" strokeWidth="20" strokeLinejoin="round" />
    <polygon points="100,60 145,130 55,130" fill="#93c5fd" stroke="#1e293b" strokeWidth="8" />
    <rect x="85" y="100" width="30" height="50" fill="#93c5fd" stroke="#1e293b" strokeWidth="4" />
    <polygon points="60,150 100,80 140,150" fill="#93c5fd" stroke="#1e293b" strokeWidth="4" />
  </svg>
);

const IsoCubes = () => (
  <svg viewBox="0 0 200 200" className="h-full w-full">
    {/* Stacked isometric cubes */}
    {/* Bottom cube */}
    <polygon points="100,160 150,135 150,105 100,130 50,105 50,135" fill="#065f46" stroke="#1e293b" strokeWidth="2" />
    <polygon points="100,130 150,105 100,80 50,105" fill="#10b981" stroke="#1e293b" strokeWidth="2" />
    <polygon points="100,130 100,160 50,135 50,105" fill="#047857" stroke="#1e293b" strokeWidth="2" />
    <polygon points="100,130 100,160 150,135 150,105" fill="#059669" stroke="#1e293b" strokeWidth="2" />
    
    {/* Top left cube */}
    <polygon points="70,105 120,80 120,50 70,75 20,50 20,80" fill="#065f46" stroke="#1e293b" strokeWidth="2" />
    <polygon points="70,75 120,50 70,25 20,50" fill="#10b981" stroke="#1e293b" strokeWidth="2" />
    <polygon points="70,75 70,105 20,80 20,50" fill="#047857" stroke="#1e293b" strokeWidth="2" />
    <polygon points="70,75 70,105 120,80 120,50" fill="#059669" stroke="#1e293b" strokeWidth="2" />
    
    {/* Top right cube */}
    <polygon points="130,105 180,80 180,50 130,75 80,50 80,80" fill="#065f46" stroke="#1e293b" strokeWidth="2" />
    <polygon points="130,75 180,50 130,25 80,50" fill="#10b981" stroke="#1e293b" strokeWidth="2" />
    <polygon points="130,75 130,105 80,80 80,50" fill="#047857" stroke="#1e293b" strokeWidth="2" />
    <polygon points="130,75 130,105 180,80 180,50" fill="#059669" stroke="#1e293b" strokeWidth="2" />
  </svg>
);

const services = [
  {
    Graphic: IsoTriangle,
    bgColor: "bg-sky-300",
    title: "Alignerr Connect",
    description: "Explore top-tier domain experts with proven track records and connect them directly to your workflows to deliver exceptional frontier data and model evaluation results",
    buttonText: "Learn more",
    buttonVariant: "outline" as const,
  },
  {
    Graphic: IsoCubes,
    bgColor: "bg-emerald-400",
    title: "Managed services",
    description: "Access on-demand frontier data labeling service from world-class experts across sciences, law, humanities, and engineering through Sundial's exclusive talent network",
    buttonText: "Contact sales",
    buttonVariant: "default" as const,
  },
];

export function ServiceCards() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">Labeling services</h2>
      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex gap-6 rounded-xl border border-border bg-card p-2"
          >
            <div className={`flex h-48 w-48 shrink-0 items-center justify-center rounded-lg ${service.bgColor}`}>
              <div className="h-32 w-32">
                <service.Graphic />
              </div>
            </div>
            <div className="flex flex-col justify-center py-2">
              <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <div>
                <Button variant={service.buttonVariant} size="sm">
                  {service.buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
