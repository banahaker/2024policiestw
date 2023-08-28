import { Card, CardBody } from "@nextui-org/react";
export default function Description() {
  return (
    <div className="w-full flex flex-col items-center p-10">
      <Card>
        <CardBody>
          <p className="max-w-[800px] m-auto text-center">
            2024
            大選將至，各路參選者摩拳擦掌，在攻擊對手的同時也相繼提出自己的政績，你清楚各個候選人都提出了什麼政見嗎？你知道哪些新政見被提出了嗎？不管你是要查看還是新增政見，這裡就是最好的去處，趕緊看看各個候選人都有哪些政見吧！或是把你知道但這裡卻沒有的政見加入清單上吧！
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
