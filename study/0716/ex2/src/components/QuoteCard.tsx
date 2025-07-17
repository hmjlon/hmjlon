type Props = { text: string };

export default function QuoteCard({ text }: Props) {
  return (
    <blockquote className="p-4 border-1-4 border-green-400 bg-green-50 text-gray-800 italic">
      {text}
    </blockquote>
  );
}
