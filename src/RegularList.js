export const RegularList = ({ allListData, propName, itemComp: ItemComp }) => {
  return (
    <>
      {allListData.map((listData, id) => {
        return <ItemComp {...{ [propName]: listData }} />;
      })}
    </>
  );
};
