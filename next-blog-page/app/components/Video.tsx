type Props = {
  id: string;
};

export default function Video({ id }: Props) {
  return (
    <div className="aspcet-w-16 aspect-h-9">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        height={350}
        width={550}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
}
