interface VehicleCardProps {
  data: {
    name: string;
    vehicle_class: string;
  }
}

export const VehicleCard = ({ data }: VehicleCardProps) => {
  console.log(data)
  const { name, vehicle_class } = data;
  return (
    <div>
      <h3>{name}</h3>
      <span>{vehicle_class}</span>
    </div>
  )
}