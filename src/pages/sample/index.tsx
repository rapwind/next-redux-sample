import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import SampleList from "~/components/templates/SampleList";
import { actions, SampleState } from "~/features/sample/sampleSlice";
import { RootState } from "~/features/store";

const Sample: FC = () => {
  const { list, loadingList, loadingListError } = useSelector<
    RootState,
    SampleState
  >((state) => state.sample);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.listSampleAction());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>一覧</title>
      </Head>
      <SampleList
        loading={loadingList}
        error={loadingListError}
        items={list}
      ></SampleList>
    </div>
  );
};
export default Sample;
