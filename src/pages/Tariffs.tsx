import React, { FC, memo } from "react";
import Grid from "components/styled/Grid";
import Layout from "components/common/Layout";
import Typography from "@material-ui/core/Typography";
import "styled-components/macro";
import { TariffType } from "types";
import PageInfo from "components/common/PageInfo";
import CarouselItem from "components/tariffs/CarouselItem";
import CarouselContainer from "containers/carousel/CarouselContainer";
import RedGrid, { RedBreakpoints } from "containers/common/RedGrid";

const RED_BREAKPOINTS: RedBreakpoints = {
  sm: { size: 2, right: true },
  xs: { size: 0 },
};

const Tariffs: FC = memo(() => {
  const data: TariffType[] = new Array(10).fill({
    title: "Дневной пропуск",
    price: 300,
    slug: "",
  });
  return (
    <Layout title="Tariffs" titleRight redBreakpoints={RED_BREAKPOINTS}>
      <Grid item lg={6}>
        <PageInfo>
          <Typography variant="h2">
            Выберите свой оптимальный вариант
          </Typography>
        </PageInfo>
      </Grid>
      <RedGrid redBreakpoints={RED_BREAKPOINTS} item container>
        <CarouselContainer
          items={data}
          renderItem={(props) => <CarouselItem {...props} />}
          redBreakpoints={RED_BREAKPOINTS}
          heightBreakpoints={{ xs: 13, sm: 4 }}
          widthBreakpoints={{ xs: 9, sm: 3 }}
        />
      </RedGrid>
    </Layout>
  );
});

export default Tariffs;
