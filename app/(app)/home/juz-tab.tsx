import JuzItem from "./juz-item";

const JuzTab = async () => {
  return (
    <div>
      {Array.from({ length: 30 }, (_, index) => (
        <JuzItem key={index + 1} juzNumber={index + 1} />
      ))}
    </div>
  );
};

export default JuzTab;
