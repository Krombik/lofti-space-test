import React, { FC, memo } from "react";
import Grid from "components/styled/Grid";
import Layout from "components/common/Layout";
import Typography from "@material-ui/core/Typography";
import Button from "components/styled/Button";
import "styled-components/macro";
import { SpaceType } from "types";
import PageInfo from "components/common/PageInfo";
import CarouselItem from "components/space/CarouselItem";
import CarouselContainer from "containers/carousel/CarouselContainer";

const Space: FC = memo(() => {
  const data: SpaceType[] = new Array(10).fill({
    image: "img/img.jpg",
    title: "Open space",
    slug: "",
  });
  return (
    <Layout title="space" wrap="wrap-reverse" justify="center">
      <Grid item sm={4}>
        <PageInfo
          button={
            <Button variant="contained" color="primary">
              ПЕРЕЙТИ В ГАЛЕРЕЮ
            </Button>
          }
        >
          <Typography variant="h2">Найдите Ваше персональное место</Typography>
        </PageInfo>
      </Grid>
      <Grid item container sm={8}>
        <CarouselContainer
          items={data}
          renderItem={(props, index) => (
            <CarouselItem {...props} index={index} />
          )}
          heightBreakpoints={{ xs: 14, sm: 5 }}
          widthBreakpoints={{ xs: 9, sm: 3 }}
        />
      </Grid>
    </Layout>
  );
});

export default Space;
