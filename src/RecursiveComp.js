const isObject = (data) => {
  if (typeof data === "object" && data != null) {
    return data;
  }
};

export const RecursiveComp = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }
  const pairs = Object.entries(data);
  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <>
            <p>{key}</p>
            <ul>
              <li>
                <RecursiveComp data={value} />
              </li>
            </ul>
          </>
        );
      })}
    </>
  );
};
