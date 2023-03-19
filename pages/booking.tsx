import { FC } from 'react';

interface QuotationTableProps {
  origin: string;
  destination: string;
  modeOfTransport: string;
  cargoDescription: string;
  insuranceCoverage: boolean;
  customsClearance: boolean;
  transportationFee: number;
  insuranceFee: number;
  customsClearanceFee: number;
  total: number;
}

const Booking: FC<QuotationTableProps> = ({
  origin,
  destination,
  modeOfTransport,
  cargoDescription,
  insuranceCoverage,
  customsClearance,
  transportationFee,
  insuranceFee,
  customsClearanceFee,
  total,
}) => {

  async function fetchData() {
    const response = await fetch('https://cataas.com/c',{
      method:"GET"
    });
    const data = await response.blob();
    const imageUrl = URL.createObjectURL(data);
  
    const img = document.createElement('img');
    img.src = imageUrl;
    document.body.appendChild(img);
  }

  return (
  <table className="table-fixed border border-gray-400">
      <thead>
        <tr className="bg-blue-500 text-white">
          <th className="w-1/6 px-4 py-2">Item</th>
          <th className="w-1/2 px-4 py-2">Details</th>
          <th className="w-1/3 px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Origin</td>
          <td className="border px-4 py-2">Sydney</td>
          <td className="border px-4 py-2"></td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Destination</td>
          <td className="border px-4 py-2">Busan</td>
          <td className="border px-4 py-2"></td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Mode of Transport</td>
          <td className="border px-4 py-2">By Air</td>
          <td className="border px-4 py-2"></td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Cargo Description</td>
          <td className="border px-4 py-2">Health Supplement</td>
          <td className="border px-4 py-2"></td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Insurance Coverage</td>
          <td className="border px-4 py-2">Yes</td>
          <td className="border px-4 py-2"></td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Customs Clearance</td>
          <td className="border px-4 py-2">Yes</td>
          <td className="border px-4 py-2"></td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Transportation Fee</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2 text-right">$150</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Insurance Fee</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2 text-right">$100</td>
        </tr>
        <tr>
      <td className="border px-4 py-2">Customs Clearance Fee</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2 text-right">$150</td>
    </tr>
    <tr className="bg-blue-500">
      <td className="border px-4 py-2 font-semibold">Total</td>
      <td className="border px-4 py-2"><button
    onClick={fetchData}
    >check</button></td>
      <td className="border px-4 py-2 text-right font-semibold">$1200</td>
    </tr>
  </tbody>
</table>
)
  };

export default Booking;