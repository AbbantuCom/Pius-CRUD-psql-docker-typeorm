import { UserController } from "../controllers/UserController"
import { ChannelController } from "../controllers/ChannelController"
import { TagController } from "../controllers/TagController"


export const Routes = [
{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "put",
    route: "/users/:id",
    controller: UserController,
    action: "update"
},
{
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/channel",
    controller: ChannelController,
    action: "all"
}, {
    method: "get",
    route: "/channel/:id",
    controller: ChannelController,
    action: "one"
}, {
    method: "post",
    route: "/channel",
    controller: ChannelController,
    action: "save"
}, {
    method: "put",
    route: "/channel/:id",
    controller: ChannelController,
    action: "update"
},
{
    method: "delete",
    route: "/channel/:id",
    controller: ChannelController,
    action: "remove"
},
{
    method: "get",
    route: "/tag",
    controller: TagController,
    action: "all"
}, {
    method: "get",
    route: "/tag/:id",
    controller: TagController,
    action: "one"
}, {
    method: "post",
    route: "/tag",
    controller: TagController,
    action: "save"
}, {
    method: "put",
    route: "/tag/:id",
    controller: TagController,
    action: "update"
},
{
    method: "delete",
    route: "/tag/:id",
    controller: TagController,
    action: "remove"
}
]