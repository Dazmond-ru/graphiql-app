import { ReactComponent as RootIcon } from '../../../assets/root.svg';
import { schemaStore } from '../../../store';
import { OpenState } from '../../../constants/docs';

function Root() {
  const { schema } = schemaStore;

  const queryType = schema ? schema.getQueryType() : null;

  const fields = queryType ? queryType.getFields() : null;

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { target } = event;
    const text = (target as HTMLSpanElement).textContent || '';

    schemaStore.saveStateToHistory();

    schemaStore.setBackText(schemaStore.headerText);
    schemaStore.setHeaderText(text);

    schemaStore.setQueryFields(fields);
    schemaStore.setOpenState(OpenState.queryFields);
  };

  return (
    <div className="max-w-md">
      <h3 className="text-3xl">{schemaStore.headerText}</h3>
      <p className="mt-4">A GraphQL schema provides a root type for each kind of operation.</p>
      <div className="flex items-center mt-4">
        <RootIcon className="mr-2" />
        <p className="text-sm">Root Types</p>
      </div>
      <p className="font-normal mt-4 text-blue-500">
        query:{' '}
        {queryType ? (
          <span
            className="text-orange-500 hover:underline cursor-pointer font-normal"
            onClick={handleClick}
          >
            {queryType.name}
          </span>
        ) : (
          ''
        )}
      </p>
    </div>
  );
}

export default Root;
